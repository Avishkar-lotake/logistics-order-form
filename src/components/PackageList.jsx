import styles from "./PackageList.module.css";
import { PackageItem } from "./PackageItem";
import { createEmptyPackage } from "../types/logistics";

export function PackageList({ value, onChange }) {
  const packages = value.length ? value : [createEmptyPackage()];

  function addPackage() {
    onChange([...packages, createEmptyPackage()]);
  }

  function removePackage(id) {
    if (packages.length <= 1) return;
    onChange(packages.filter((p) => p.id !== id));
  }

  function updatePackage(id, patch) {
    onChange(packages.map((p) => (p.id === id ? { ...p, ...patch } : p)));
  }

  return (
    <div className={styles.list}>
      <div className={styles.headerRow}>
        <div className={styles.headerText}>
          {packages.length} package{packages.length === 1 ? "" : "s"}
        </div>
        <button className={styles.addButton} type="button" onClick={addPackage}>
          Add package
        </button>
      </div>

      <div className={styles.items}>
        {packages.map((pkg, idx) => (
          <PackageItem
            key={pkg.id}
            index={idx}
            value={pkg}
            canRemove={packages.length > 1}
            onChange={(patch) => updatePackage(pkg.id, patch)}
            onRemove={() => removePackage(pkg.id)}
          />
        ))}
      </div>
    </div>
  );
}
