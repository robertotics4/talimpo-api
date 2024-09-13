import { EstablishmentType } from '@core/domain';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

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
  isPublic: boolean;

  @ApiProperty({
    description: 'Tipo de estabelecimento',
    enum: EstablishmentType,
    example: EstablishmentType.RESTAURANT,
  })
  establishmentType: EstablishmentType;

  @ApiProperty({
    description: 'Latitude da localização do banheiro',
    example: -3.1049,
  })
  @IsNumber()
  latitude: number;

  @ApiProperty({
    description: 'Longitude da localização do banheiro',
    example: -60.025,
  })
  @IsNumber()
  longitude: number;
}
