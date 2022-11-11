export type BuildingType = 'house' | 'apartment';

export type User = {
  id: string;
  firstname: string;
  lastname: string;
  particular: boolean;
  professional: boolean;
  buildingType: BuildingType;
  companyName: string;
  sirenNumber: string;
  address: string;
  email: string;
  blockstoId: string;
  blockstoSecreteNumber: string;
  avatar: string;
};
