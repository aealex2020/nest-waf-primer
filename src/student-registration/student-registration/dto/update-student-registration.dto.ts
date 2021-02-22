import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentRegistrationDto } from './create-student-registration.dto';

export class UpdateStudentRegistrationDto extends PartialType(CreateStudentRegistrationDto) {}
