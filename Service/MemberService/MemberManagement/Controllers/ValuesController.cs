using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace MemberManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        // GET api/values
        [HttpGet]
        public IEnumerable<Member> Get()
        {
            return new List<Member>
            {
                new Member{ Email = "a@d.com", Name="adc", Type = 1 },
                new Member{ Email = "a@c.com", Name="acc", Type = 3 },
                new Member{ Email = "a@s.com", Name="asc", Type = 2 }
            };
        }
    }
}
