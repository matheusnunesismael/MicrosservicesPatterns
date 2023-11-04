import modules from './modules';
import { ChassiCacheModule } from './cache/cache.module';
import chassiConfig from './config/configuration'

export default { ...modules, ChassiCacheModule, chassiConfig }
