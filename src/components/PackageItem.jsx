import styles from "./PackageItem.module.css";

export function PackageItem({ index, value, canRemove, onChange, onRemove }) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div>
          <div className={styles.title}>Package {index + 1}</div>
          <div className={styles.subtitle}>Enter dimensions and value</div>
        </div>
        <button
          className={canRemove ? styles.removeButton : styles.removeButtonDisabled}
          type="button"
          onClick={onRemove}
          disabled={!canRemove}
          aria-disabled={!canRemove}
          title={canRemove ? "Remove package" : "At least one package is required"}
        >
          Remove
        </button>
      </div>

      <div className={styles.grid}>
        <label className={styles.field}>
          <span className={styles.label}>Name</span>
          <input
            className={styles.input}
            value={value.name}
            onChange={(e) => onChange({ name: e.target.value })}
            placeholder="Carton / Box / Pallet"
            autoComplete="off"
          />
        </label>

        <label className={styles.field}>
          <span className={styles.label}>Weight</span>
          <input
            className={styles.input}
            inputMode="decimal"
            value={value.weight}
            onChange={(e) => onChange({ weight: e.target.value })}
            placeholder="kg"
            autoComplete="off"
          />
        </label>

        <label className={styles.field}>
          <span className={styles.label}>Length</span>
          <input
            className={styles.input}
            inputMode="decimal"
            value={value.length}
            onChange={(e) => onChange({ length: e.target.value })}
            placeholder="cm"
            autoComplete="off"
          />
        </label>

        <label className={styles.field}>
          <span className={styles.label}>Width</span>
          <input
            className={styles.input}
            inputMode="decimal"
            value={value.width}
            onChange={(e) => onChange({ width: e.target.value })}
            placeholder="cm"
            autoComplete="off"
          />
        </label>

        <label className={styles.field}>
          <span className={styles.label}>Height</span>
          <input
            className={styles.input}
            inputMode="decimal"
            value={value.height}
            onChange={(e) => onChange({ height: e.target.value })}
            placeholder="cm"
            autoComplete="off"
          />
        </label>

        <label className={styles.field}>
          <span className={styles.label}>Declared value</span>
          <input
            className={styles.input}
            inputMode="decimal"
            value={value.declaredValue}
            onChange={(e) => onChange({ declaredValue: e.target.value })}
            placeholder="₹ / $"
            autoComplete="off"
          />
        </label>
      </div>
    </div>
  );
}
