export const Status = {
  AVAILABLE: 'available',
  RENTED: 'rented',
  MAINTENANCE: 'under-maintenance',
} as const;
export type Status = (typeof Status)[keyof typeof Status];