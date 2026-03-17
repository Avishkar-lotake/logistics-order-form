import styles from "./OrderForm.module.css";
import { PackageList } from "./PackageList";
import { createEmptyPackage } from "../types/logistics";

export function OrderForm({ value, onChange }) {
  function set(key, next) {
    onChange({ ...value, [key]: next });
  }

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h2 className={styles.cardTitle}>Order creation</h2>
        <p className={styles.cardSubtitle}>Enter shipment details</p>
      </div>

      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <div className={styles.grid}>
          <label className={styles.field}>
            <span className={styles.label}>Order ID (read-only)</span>
            <input className={styles.input} value={value.orderId} readOnly />
          </label>

          <label className={styles.field}>
            <span className={styles.label}>Shipment date</span>
            <div className={styles.dateInputWrapper}>
              <input
                type="date"
                className={styles.input}
                value={value.shipmentDate || ""}
                min={new Date().toISOString().split('T')[0]}
                max={new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}
                onChange={(e) => set("shipmentDate", e.target.value)}
              />
            </div>
          </label>

          <label className={styles.field}>
            <span className={styles.label}>Delivery type</span>
            <select
              className={styles.input}
              value={value.deliveryType}
              onChange={(e) =>
                set("deliveryType", e.target.value)
              }
            >
              <option value="Standard">Standard</option>
              <option value="Express">Express</option>
            </select>
          </label>

          <div className={styles.fieldFullRow}>
            <label className={styles.checkbox}>
              <input
                className={styles.checkboxInput}
                type="checkbox"
                checked={value.fragile}
                onChange={(e) => set("fragile", e.target.checked)}
              />
              <span className={styles.checkboxLabel}>Fragile</span>
            </label>
            <label className={styles.checkbox}>
              <input
                className={styles.checkboxInput}
                type="checkbox"
                checked={value.insuranceRequired}
                onChange={(e) => set("insuranceRequired", e.target.checked)}
              />
              <span className={styles.checkboxLabel}>Insurance required</span>
            </label>
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <div>
              <div className={styles.sectionTitle}>Sender summary</div>
              <div className={styles.sectionSubtitle}>Consignor details</div>
            </div>
          </div>

          <div className={styles.grid}>
            <label className={styles.field}>
              <span className={styles.label}>Name</span>
              <input
                className={styles.input}
                value={value.consignor.name}
                onChange={(e) =>
                  set("consignor", { ...value.consignor, name: e.target.value })
                }
                autoComplete="off"
              />
            </label>
            <label className={styles.field}>
              <span className={styles.label}>City</span>
              <input
                className={styles.input}
                value={value.consignor.city}
                onChange={(e) =>
                  set("consignor", { ...value.consignor, city: e.target.value })
                }
                autoComplete="off"
              />
            </label>
            <label className={styles.fieldFull}>
              <span className={styles.label}>Address</span>
              <input
                className={styles.input}
                value={value.consignor.address}
                onChange={(e) =>
                  set("consignor", { ...value.consignor, address: e.target.value })
                }
                autoComplete="off"
              />
            </label>
            <label className={styles.field}>
              <span className={styles.label}>Pincode</span>
              <input
                className={styles.input}
                value={value.consignor.pincode}
                onChange={(e) =>
                  set("consignor", { ...value.consignor, pincode: e.target.value })
                }
                autoComplete="off"
              />
            </label>
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <div>
              <div className={styles.sectionTitle}>Receiver summary</div>
              <div className={styles.sectionSubtitle}>Consignee details</div>
            </div>
          </div>

          <div className={styles.grid}>
            <label className={styles.field}>
              <span className={styles.label}>Name</span>
              <input
                className={styles.input}
                value={value.consignee.name}
                onChange={(e) =>
                  set("consignee", { ...value.consignee, name: e.target.value })
                }
                autoComplete="off"
              />
            </label>
            <label className={styles.field}>
              <span className={styles.label}>City</span>
              <input
                className={styles.input}
                value={value.consignee.city}
                onChange={(e) =>
                  set("consignee", { ...value.consignee, city: e.target.value })
                }
                autoComplete="off"
              />
            </label>
            <label className={styles.fieldFull}>
              <span className={styles.label}>Address</span>
              <input
                className={styles.input}
                value={value.consignee.address}
                onChange={(e) =>
                  set("consignee", { ...value.consignee, address: e.target.value })
                }
                autoComplete="off"
              />
            </label>
            <label className={styles.field}>
              <span className={styles.label}>Pincode</span>
              <input
                className={styles.input}
                value={value.consignee.pincode}
                onChange={(e) =>
                  set("consignee", { ...value.consignee, pincode: e.target.value })
                }
                autoComplete="off"
              />
            </label>
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <div>
              <div className={styles.sectionTitle}>Packages</div>
              <div className={styles.sectionSubtitle}>
                Add one or more packages. Minimum one package is required.
              </div>
            </div>
          </div>

          <PackageList value={value.packages} onChange={(next) => set("packages", next)} />
        </div>

        <div className={styles.actions}>
          <button className={styles.primaryButton} type="button">
            Create order
          </button>
          <button className={styles.secondaryButton} type="button" onClick={() => onChange(initialReset(value))}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

function initialReset(prev) {
  return {
    ...prev,
    shipmentDate: "",
    deliveryType: prev.deliveryType,
    consignor: { name: "", address: "", city: "", pincode: "" },
    consignee: { name: "", address: "", city: "", pincode: "" },
    packages: [createEmptyPackage()],
    fragile: false,
    insuranceRequired: false
  };
}
