/*
| Developed by Starton
| Filename : transfer.dto.ts
| Author : Alexandre Schaffner (alexandre.s@starton.com)
*/

import { IsEthereumAddress, IsString } from 'class-validator';

/*
|--------------------------------------------------------------------------
| NFT TRANSFER DTO
|--------------------------------------------------------------------------
*/
export class TransferDto {
  @IsEthereumAddress()
  from: string;

  @IsEthereumAddress()
  to: string;

  @IsString()
  id: string;
}
