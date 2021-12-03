using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Core.Entities.Identity;
using Core.Interfaces;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace Infrastructure.Services //token via json with configuration to enable a signature key payload may be exposed but the signature key won't
{
    public class TokenService : ITokenService

    {
        private readonly IConfiguration __config;
        private readonly SymmetricSecurityKey _key;
        public TokenService(IConfiguration config)
        {
            __config = config;
            _key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(__config["Token:Key"]));
        }

        public string CreateToken(AppUser user)
        {
                var claims = new List<Claim> 
            {
                new Claim(ClaimTypes.Email, user.Email),
                new Claim(ClaimTypes.GivenName, user.DisplayName)
            };

            var creds = new SigningCredentials(_key, SecurityAlgorithms.HmacSha512Signature);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(7),
                SigningCredentials = creds,
                Issuer = __config["Token:Issuer"]
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}