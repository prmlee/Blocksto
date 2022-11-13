import { Response } from "express";
import httpStatus from "http-status";
import { Body, JsonController, Put, Res, UseBefore } from "routing-controllers";
import { User } from "../database/entities/user.entity";
import { UserInsertParam } from "../dtos/user/insert.dto";
import { AuthMiddleware } from "../middlewares/auth.middleware";
import { UserService } from "../services/user.service";

@JsonController("/user")
export class UserController { 
  @UseBefore(AuthMiddleware.isAuthenticated)
  @Put("/")
  async insert(@Body() userReq: UserInsertParam, @Res() response: Response) { 
    try {
      const user: User = response.locals.user;
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
      
      const savedUser = UserService.save(user);
      response.status(httpStatus.OK).json({ data: savedUser });
    } catch (error) {
      response.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Internal Server Error" });
    }
  }
}