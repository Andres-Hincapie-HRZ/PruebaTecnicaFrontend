export const formatearMoneda = (valor) => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP'
  }).format(valor);
};

export const formatearFecha = (fecha) => {
  return new Date(fecha).toLocaleDateString('es-CO');
}; 