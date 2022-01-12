using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace broadcaster_api
{
  public class UserProfile
  {
    public Guid UserId { get; set; }
    public string Email { get; set; }
    public string ArtistName { get; set; }
    public string Address { get; set; }
    public string City { get; set; }
    public string Country { get; set; }
    public string ZipCode { get; set; }
    public string ProfilePictureUrl { get; set; }


  }
}
