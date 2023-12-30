import { Router } from 'express';
import note from './notes';

const router = Router();

router.use('/notes', note);
export default router;
