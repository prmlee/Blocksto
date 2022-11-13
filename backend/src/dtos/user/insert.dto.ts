import {
  IsAlpha,
  IsAlphanumeric,
  IsBoolean,
  IsEmail,
  IsNumberString,
  IsPositive,
  IsString,
} from "class-validator";

export class UserInsertParam {
  @IsAlpha()
  firstname: string;

  @IsAlpha()
  lastname: string;

  @IsBoolean()
  particular: boolean;

  @IsBoolean()
  professional: boolean;

  @IsPositive()
  buildingType: number;

  @IsAlphanumeric()
  companyName: string;

  @IsNumberString()
  sirenNumber: string;

  @IsAlphanumeric()
  address: string;

  @IsEmail()
  email: string;

  @IsString()
  blockstoId: string;

  @IsString()
  blockstoPassword: string;

  @IsString()
  avatar: string;
}
