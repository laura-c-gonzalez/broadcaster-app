using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace broadcaster_api
{
  [Route("api/[controller]")]
  [ApiController]
  public class AccountController : Controller
  {

    //mock static user profile
    List<UserProfile> profiles = new List<UserProfile>();

    //constructor
    public AccountController()
    {
      //set the mock list user profile

      var profile1 = new UserProfile()
      {
        Address = "",
        ArtistName = "LauraG",
        City= "Calgary",
        Country = "Canada",
        Email = "laura@test.com",
        ProfilePictureUrl = "https://i1.sndcdn.com/avatars-000082358352-bceljo-t500x500.jpg",
        UserId = Guid.NewGuid(),
        ZipCode = "A1B2C3"
      };

      var profile2 = new UserProfile()
      {
        Address = "",
        ArtistName = "Dj Shadow",
        City = "LA",
        Country = "USA",
        Email = "djshadow@test.com",
        ProfilePictureUrl = "https://img.discogs.com/Zc2b7e56V7O6Hh4VF-72dCpMNNk=/367x455/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-4478-1584531917-8230.jpeg.jpg",
        UserId = Guid.NewGuid(),
        ZipCode = "123456"
      };

      profiles.Add(profile1);
      profiles.Add(profile2);

    }

    [HttpPost("Register")]
    public async Task<IActionResult> RegisterAccount(AccountRegisterDto accountRegister, CancellationToken cancellationToken)
    {
      //todo: implement the back end and save the registration in the database later
      return Ok();
    }


    [HttpPost("login")]
    public async Task<IActionResult> Login(LoginDto loginDto, CancellationToken cancellationToken)
    {
      //todo: implement the back end and save the registration in the database later
      if (loginDto.Email == "testuser@email.com" && loginDto.Password == "test")
        return Ok(true);
      else
        return Ok(false);
    }


    [HttpGet("GetUserByEmail")]
    public async Task<IActionResult> GetUserByEmail(string email, CancellationToken cancellationToken)
    {

      var profile = profiles.Where(p => p.Email == email).FirstOrDefault();

      return Ok(profile);


    }

    [HttpGet("GetUsers")]
    public async Task<IActionResult> GetUsers(CancellationToken cancellationToken)
    {

      return Ok(profiles);

    }

  }
}
