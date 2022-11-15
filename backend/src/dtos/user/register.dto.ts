import { IsAlpha, IsBoolean, IsEmail, IsNumber, IsPositive, IsString } from 'class-validator';

export class UserRegisterParam {
  @IsAlpha()
  firstname: string;

  @IsAlpha()
  lastname: string;

  @IsBoolean()
  particular: boolean;

  @IsBoolean()
  professional: boolean;

  @IsNumber()
  buildingType: number;

  @IsString()
  companyName: string;

  @IsString()
  sirenNumber: string;

  @IsString()
  address: string;

  @IsEmail()
  email: string;

  @IsString()
  blockstoId: string;

  @IsString()
  blockstoPassword: string;
}
