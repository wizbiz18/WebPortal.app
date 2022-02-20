using FloQatarWebPortal.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace FloQatarWebPortal.Controllers
{
    [EnableCors("https://flo.turkfashioncenter.com", "*", "*")]
    public class LoginController : ApiController
    {
        [Route("api/Login/{email}/{pass}")]
        public IEnumerable<login> GetData( string email, string pass)
        {
            TURKCENTER_DBEntities turkweb = new TURKCENTER_DBEntities();
            return turkweb.logins.Select(x => x).Where(x => x.Email == email && x.Password == pass).ToArray();
        }
    }
}
