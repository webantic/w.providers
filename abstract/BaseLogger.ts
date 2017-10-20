import { IApplication } from 'b.app/common/interfaces/application'
import { IIndexable } from '../common/interfaces/decorators'
import { ILogger, Logger } from '../common/interfaces/loggers'

import { BaseProvider } from './BaseProvider'
import * as debug from 'debug'
import { NotImplementedError } from '../common/errors/NotImplementedError'

abstract class BaseLogger <T> extends BaseProvider implements ILogger <T> {
  [key: string]: T|Logger|any

  __loggers: IIndexable<T>

  constructor (application: IApplication, config: any) {
    super(application, config)
  }

  addLogLevel (level: string) {
    throw new NotImplementedError()
  }

  trace (...args: any[]) {
    throw new NotImplementedError()
  }
  info (...args: any[]) {
    throw new NotImplementedError()
  }

  log (...args: any[]) {
    throw new NotImplementedError()
  }

  warn (...args: any[]) {
    throw new NotImplementedError()
  }

  error (...args: any[]) {
    throw new NotImplementedError()
  }
}

export {
  BaseLogger
}
