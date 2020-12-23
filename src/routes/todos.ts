import {create} from 'domain';
import { Router } from 'express';

import { createTodo, getTodos, updateTodo, deleteTodo } from '../controllers/todos';

export const router = Router();

router.post('/', createTodo);
router.get('/', getTodos);
router.patch('/:id', updateTodo);
router.get('/:id', deleteTodo);
