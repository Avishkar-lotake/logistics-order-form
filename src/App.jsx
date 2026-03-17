import React, { useState } from "react";
import styles from "./app.module.css";
import { ShipmentPreview } from "./components/ShipmentPreview";
import { OrderForm } from "./components/OrderForm";
import {
  createEmptyPackage,
  generateOrderId
} from "./types/logistics";

const initialDraft = {
  orderId: generateOrderId(),
  shipmentDate: "",
  deliveryType: "Standard",
  consignor: { name: "", address: "", city: "", pincode: "" },
  consignee: { name: "", address: "", city: "", pincode: "" },
  packages: [createEmptyPackage()],
  fragile: false,
  insuranceRequired: false
};

export default function App() {
  const [draft, setDraft] = useState(initialDraft);

  return (
    <main className={styles.shell}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Create Logistics Order</h1>
          <p className={styles.subtitle}>
            Fill in the order details and review the live shipment preview.
          </p>
        </div>
      </header>

      <section className={styles.grid}>
        <div className={styles.panelLeft}>
          <OrderForm value={draft} onChange={setDraft} />
        </div>
        <div className={styles.panelRight}>
          <ShipmentPreview draft={draft} />
        </div>
      </section>
    </main>
  );
}
