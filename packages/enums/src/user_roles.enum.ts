export const Roles = {
  OWNER: 'owner',
  STAFF: 'staff',
  CUSTOMER: 'customer',
  MAINTENANCE_CREW: 'maintenance-crew',
} as const;
export type Roles = (typeof Roles)[keyof typeof Roles];