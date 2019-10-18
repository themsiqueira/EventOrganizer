import { Router } from 'express';

import EventOrganizeController from './app/controllers/EventOrganizerController';

// import CheckPayloadMiddleware from './app/middlewares/CheckPayload';

const routes = new Router();

routes.post('/organize/event', EventOrganizeController.Organizer);

export default routes;
