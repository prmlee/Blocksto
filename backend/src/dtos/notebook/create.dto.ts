import { IsAlphanumeric, IsDate, IsDecimal, IsNumber, IsOptional, IsString } from 'class-validator';

export class NotebookCreateParam {
  @IsAlphanumeric()
  title: string;

  @IsString()
  address: string;

  @IsDecimal()
  lat: number;

  @IsDecimal()
  lng: number;

  @IsNumber()
  type: number;

  @IsNumber()
  square: number;

  @IsNumber()
  condom: number;

  @IsDate()
  constructDate: Date;

  @IsNumber()
  ecdlevel: number;

  @IsOptional()
  @IsString()
  additionalInfo: string;
}
