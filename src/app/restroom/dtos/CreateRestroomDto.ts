import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsBoolean,
  IsLatitude,
  IsLongitude,
  IsOptional,
  IsString,
} from 'class-validator';

export abstract class CreateRestroomDto {
  @ApiProperty({ description: 'Nome do banheiro', example: 'Restroom A' })
  @IsString()
  name: string;

  @ApiPropertyOptional({
    description: 'Descrição do banheiro',
    example: 'Banheiro limpo e bem localizado.',
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ description: 'Indica se o banheiro é público', example: true })
  @IsBoolean()
  @Transform(({ value }) => Boolean(value))
  isPublic: boolean;

  @ApiProperty({
    description: 'Tipo de estabelecimento',
    example: 'Restaurante',
  })
  @IsString()
  establishmentType: string;

  @ApiProperty({
    description: 'Latitude da localização do banheiro',
    example: -3.1049,
  })
  @IsLatitude()
  latitude: number;

  @ApiProperty({
    description: 'Longitude da localização do banheiro',
    example: -60.025,
  })
  @IsLongitude()
  longitude: number;
}
