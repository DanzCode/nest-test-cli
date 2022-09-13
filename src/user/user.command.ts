import { Command, CommandRunner, Option } from 'nest-commander';
import { UserService } from './user.service';
import { isEmail } from 'class-validator';
import { InvalidOptionArgumentError } from 'commander';

interface UserCreateInput {
  email: string;
  password: string;
}

@Command({ name: 'create-user', description: 'Creates a new user.' })
export class UserCommand extends CommandRunner {
  constructor(private userService: UserService) {
    super();
  }

  async run(passedParam: string[], options?: UserCreateInput): Promise<void> {
    console.log('command');
    if (!options) {
      throw new Error('No options defined');
    }
    const user = await this.userService.createUser(
      options.email,
      options.password,
    );
    console.log('options', options, user);
  }

  @Option({
    flags: '-m, --email [string]',
    description: 'The users email address',
    required: true,
  })
  parseEmail(val: string): string {
    if (!isEmail(val)) {
      throw new InvalidOptionArgumentError('Not a email.');
    }
    return val;
  }

  @Option({
    flags: '-p, --password [string]',
    description: 'The user`s password',
    required: true,
  })
  parsePassword(val: string): string {
    if (val.length < 16 || [' ', '\n'].some((v) => val.includes(v))) {
      throw new InvalidOptionArgumentError('Invalid Passowrd');
    }
    return val;
  }
}
