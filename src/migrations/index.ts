import * as migration_20250821_183907_initial from './20250821_183907_initial';
import * as migration_20250829_124308 from './20250829_124308';

export const migrations = [
  {
    up: migration_20250821_183907_initial.up,
    down: migration_20250821_183907_initial.down,
    name: '20250821_183907_initial',
  },
  {
    up: migration_20250829_124308.up,
    name: 'migration_20250829_124308'
  },
];
