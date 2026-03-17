export function generateOrderId(prefix = "ORD") {
  const ts = new Date()
    .toISOString()
    .replace(/[-:.TZ]/g, "")
    .slice(0, 14); // YYYYMMDDhhmmss
  const rand = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `${prefix}-${ts}-${rand}`;
}

export function createEmptyPackage() {
  return {
    id: crypto.randomUUID?.() ?? `pkg_${Math.random().toString(36).slice(2)}`,
    name: "",
    weight: "",
    length: "",
    width: "",
    height: "",
    declaredValue: ""
  };
}
