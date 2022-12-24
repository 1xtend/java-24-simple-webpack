import { logGroup } from './scripts/logger.js';
import logCollapsed from './scripts/collapsedLogger.js';
import './style.css'; // обов'язково імпортуємо стилі

logGroup('Test group', 'Hello World');
logCollapsed('Test collapsed group', 'Hello World from collapsed group');
