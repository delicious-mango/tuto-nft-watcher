/*
| Developed by Starton
| Filename : reponse-user.dto.ts
| Author : Alexandre Schaffner (alexandre.s@starton.com)
*/

/*
|--------------------------------------------------------------------------
| USER DTO - RESPONSE
|--------------------------------------------------------------------------
*/

// Basic user's infos without password
//--------------------------------------------------------------------------
export class ResponseUserDto {
  id: string;
  email: string;
  publicAddress: string;
  createdAt: Date;
}
