import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString, Max, Min } from 'class-validator';

export abstract class CreateReviewDto {
  @ApiProperty({
    description: 'ID do usuário que está criando a avaliação',
    example: '12345',
  })
  @IsString()
  userId: string;

  @ApiProperty({
    description: 'ID do banheiro que está sendo avaliado',
    example: '67890',
  })
  @IsString()
  restroomId: string;

  @ApiProperty({ description: 'Classificação dada ao banheiro', example: 4 })
  @IsNumber()
  @Min(1)
  @Max(5)
  rating: number;

  @ApiPropertyOptional({
    description: 'Comentário opcional sobre o banheiro',
    example: 'Banheiro limpo e organizado.',
  })
  @IsOptional()
  @IsString()
  comment?: string;
}
