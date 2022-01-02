using CheckInSystem.Domain.Entities;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using PassengerSystem.Application.Services.UserServices;
using PassengerSystem.Domain.Abstractions;
using PassengerSystem.Domain.Exceptions;
using PassengerSystem.Domain.ValueObjects;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace PassengerSystem.Application.UseCases.UserUseCase
{
    public class UserLoginUseCase : IUserLoginUseCase
    {
        private readonly IUserService _userService;
        private readonly IConfiguration _configuration;
        public UserLoginUseCase(IUserService userService, IConfiguration configuration)
        {
            _configuration = configuration;
            _userService = userService;
        }
        public UserTokenResult AuthenticateUser(UserLoginModel loginModel)
        {
            var user = _userService.GetUserByEmail(loginModel.Email);
            if (user == null)
                throw new UserNotFoundException();
            if (user.Password != loginModel.Password)
                throw new UserNotFoundException();
            var token = GetToken(user);
            var tokenResult = new UserTokenResult()
            {
                Token = token,
                FullName = user.FullName,
                Email = user.Email
            };
            return tokenResult;
        }
        private string GetToken(User user)
        {
            var utcNow = DateTime.UtcNow;
            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, user.Id),
                new Claim(JwtRegisteredClaimNames.UniqueName, user.Email),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(JwtRegisteredClaimNames.Iat, utcNow.ToString())
            };
            var token = new JwtSecurityToken
            (
                issuer: _configuration["Tokens:Issuer"],
                audience: _configuration["Tokens:Audience"],
                claims: claims,
                expires: DateTime.UtcNow.AddHours(1),
                notBefore: DateTime.UtcNow,
                signingCredentials: new SigningCredentials(
                new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Tokens:Key"])), SecurityAlgorithms.HmacSha256)
            );
            return new JwtSecurityTokenHandler().WriteToken(token);

        }
    }
}
