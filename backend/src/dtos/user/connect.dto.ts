import { IsString } from 'class-validator';

export class UserConnectParam {
  @IsString()
  blockstoId: string;

  @IsString()
  blockstoPassword: string;
}
