import styles from "./ShipmentPreview.module.css";

export function ShipmentPreview({ draft }) {
  const totals = draft.packages.reduce(
    (acc, p) => {
      const w = parseNumber(p.weight);
      const v = parseNumber(p.declaredValue);
      return {
        count: acc.count + 1,
        totalWeight: acc.totalWeight + w,
        totalDeclared: acc.totalDeclared + v
      };
    },
    { count: 0, totalWeight: 0, totalDeclared: 0 }
  );

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div>
          <h2 className={styles.cardTitle}>Live shipment preview</h2>
          <p className={styles.cardSubtitle}>Updates as you type</p>
        </div>
        <div className={styles.headerBadges}>
          <span className={styles.deliveryBadge}>{draft.deliveryType}</span>
          {draft.fragile ? <span className={styles.flagBadge}>Fragile</span> : null}
          {draft.insuranceRequired ? (
            <span className={styles.flagBadge}>Insurance</span>
          ) : null}
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.section}>
          <div className={styles.sectionTitle}>Shipment</div>
          <div className={styles.kvGrid}>
            <KV label="Order ID" value={draft.orderId} placeholder="—" />
            <KV label="Shipment date" value={formatDisplayDate(draft.shipmentDate)} placeholder="—" />
            <KV label="Delivery type" value={draft.deliveryType} placeholder="—" />
          </div>
        </div>

        <div className={styles.twoCol}>
          <div className={styles.section}>
            <div className={styles.sectionTitle}>Sender summary</div>
            <div className={styles.summaryBox}>
              <div className={styles.summaryName}>
                {draft.consignor.name.trim() ? draft.consignor.name : "—"}
              </div>
              <div className={styles.summaryLine}>
                {formatAddress(draft.consignor)}
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.sectionTitle}>Receiver summary</div>
            <div className={styles.summaryBox}>
              <div className={styles.summaryName}>
                {draft.consignee.name.trim() ? draft.consignee.name : "—"}
              </div>
              <div className={styles.summaryLine}>
                {formatAddress(draft.consignee)}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionHeaderRow}>
            <div className={styles.sectionTitle}>Packages</div>
            <div className={styles.totalsRow}>
              <span className={styles.totalPill}>
                {totals.count} pkg{totals.count === 1 ? "" : "s"}
              </span>
              <span className={styles.totalPill}>
                {formatNumber(totals.totalWeight)} kg
              </span>
              <span className={styles.totalPill}>
                {formatCurrency(totals.totalDeclared)}
              </span>
            </div>
          </div>

          <div className={styles.packageList}>
            {draft.packages.map((p, idx) => (
              <div key={p.id} className={styles.packageCard}>
                <div className={styles.packageTop}>
                  <div className={styles.packageTitle}>
                    {p.name.trim() ? p.name : `Package ${idx + 1}`}
                  </div>
                  <div className={styles.packageMeta}>
                    {p.weight.trim() ? `${p.weight} kg` : "— kg"}
                  </div>
                </div>

                <div className={styles.packageGrid}>
                  <KV
                    label="Dimensions"
                    value={formatDims(p.length, p.width, p.height)}
                    placeholder="—"
                  />
                  <KV
                    label="Declared value"
                    value={p.declaredValue}
                    placeholder="—"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function KV({
  label,
  value,
  placeholder
}) {
  const display = value.trim() ? value : placeholder;
  const muted = !value.trim();

  return (
    <div className={styles.kv}>
      <div className={styles.kvLabel}>{label}</div>
      <div className={muted ? styles.kvValueMuted : styles.kvValue}>{display}</div>
    </div>
  );
}

function parseNumber(raw) {
  const cleaned = raw.replace(/[^0-9.]/g, "");
  const n = cleaned ? Number(cleaned) : 0;
  return Number.isFinite(n) ? n : 0;
}

function formatNumber(n) {
  return new Intl.NumberFormat(undefined, { maximumFractionDigits: 2 }).format(n);
}

function formatCurrency(n) {
  // Currency-agnostic display since UI doesn't capture currency code yet
  return new Intl.NumberFormat(undefined, {
    style: "decimal",
    maximumFractionDigits: 2
  }).format(n);
}

function formatDims(l, w, h) {
  const hasAny = l.trim() || w.trim() || h.trim();
  return hasAny ? `${l || "—"} × ${w || "—"} × ${h || "—"}` : "";
}

function formatDisplayDate(dateString) {
  if (!dateString.trim()) return "—";
  
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;
    
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  } catch {
    return dateString;
  }
}

function formatAddress(p) {
  const parts = [p.address, p.city, p.pincode].map((x) => x.trim()).filter(Boolean);
  return parts.length ? parts.join(", ") : "—";
}
