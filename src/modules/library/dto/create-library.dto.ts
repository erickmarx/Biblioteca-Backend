import { isNotEmpty, IsOptional, isString, isURL } from "class-validator";
//TODO corrigir dto
export class CreateLibraryDto {
  @isString()
  @isNotEmpty()
  title: string;

  @isString()
  @isNotEmpty()
  publisher: string;

  @isURL()
  @IsOptional()
  pic: string;

  @isArray()
  @isNotEmpty()
  authors: string[];
}
