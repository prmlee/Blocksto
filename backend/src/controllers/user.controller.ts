import { Response } from 'express';
import httpStatus from 'http-status';
import { Body, Res, Post, JsonController } from 'routing-controllers';
import { User } from '../database/entities/user.entity';
import { UserConnectParam } from '../dtos/user/connect.dto';
import { UserRegisterParam } from '../dtos/user/register.dto';
import { UserService } from '../services/user.service';
import { AuthUtils } from '../utils/auth.utils';

@JsonController('/user')
export class UserController {
  @Post('/connect')
  async connect(@Body() userReq: UserConnectParam, @Res() response: Response) {
    try {
      const { blockstoId, blockstoPassword } = userReq;
      const user = await UserService.findByIdAndPassword(blockstoId, blockstoPassword);

      if (user) {
        const jwt = AuthUtils.createJWToken(user);
        response.status(httpStatus.OK).json({ data: { jwt, user } });
      } else {
        response.status(httpStatus.NOT_FOUND).json({ message: 'User Not Found' });
      }
    } catch (error) {
      console.log(error);
      response.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Internal Server Error' });
    }
  }

  @Post('/register')
  async register(@Body() userReq: UserRegisterParam, @Res() response: Response) {
    try {
      const user: User = new User();
      user.firstname = userReq.firstname;
      user.lastname = userReq.lastname;
      user.particular = userReq.particular;
      user.professional = userReq.professional;
      user.buildingType = userReq.buildingType;
      user.companyName = userReq.companyName;
      user.sirenNumber = userReq.sirenNumber;
      user.address = userReq.address;
      user.email = userReq.email;
      user.blockstoId = userReq.blockstoId;
      user.blockstoPassword = userReq.blockstoPassword;

      const savedUser = await UserService.save(user);
      response.status(httpStatus.OK).json({ data: savedUser });
    } catch (error) {
      console.log(error);
      response.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Internal Server Error' });
    }
  }
}
