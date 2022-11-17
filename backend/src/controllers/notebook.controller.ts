import { Response } from 'express';
import httpStatus from 'http-status';
import { Body, JsonController, Post, Put, Res, UseBefore } from 'routing-controllers';
import { Notebook } from '../database/entities/notebook.entity';
import { NotebookCreateParam } from '../dtos/notebook/create.dto';
import { AuthMiddleware } from '../middlewares/auth.middleware';
import { NotebookService } from '../services/notebook.service';

@UseBefore(AuthMiddleware)
@JsonController('/notebook')
export class NotebookController {
  @Post('/get')
  async getNotebooks(@Res() response: Response) {
    try {
      const user = response.locals.user;
      const result = await NotebookService.findByOwner(user);
    } catch (error) {}
  }

  @Put('/create')
  async create(@Body() notebookReq: NotebookCreateParam, @Res() response: Response) {
    try {
      const notebook = new Notebook();
      notebook.title = notebookReq.title;
      notebook.address = notebookReq.address;
      notebook.lat = notebookReq.lat;
      notebook.lng = notebookReq.lng;
      notebook.type = notebookReq.type;
      notebook.square = notebookReq.square;
      notebook.condom = notebookReq.condom;
      notebook.constructDate = notebookReq.constructDate;
      notebook.ecdlevel = notebookReq.ecdlevel;
      notebook.additionalInfo = notebookReq.additionalInfo;

      const savedNotebook = await NotebookService.save(notebook);
      response.status(httpStatus.OK).json({ data: savedNotebook });
    } catch (error) {
      console.log(error);
      response.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Internal Server Error' });
    }
  }
}
