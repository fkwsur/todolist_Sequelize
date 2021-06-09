const router = require('express').Router();
const { TodoController: controller } = require('../controller');

/* user 라우팅 로직 */
router.post('/create', controller.Create);
router.get('/list', controller.List);
router.post('/update', controller.Update);
router.post('/delete', controller.Delete);
 
module.exports = router;