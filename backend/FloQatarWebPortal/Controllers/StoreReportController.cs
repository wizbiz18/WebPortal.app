using FloQatarWebPortal.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;

namespace FloQatarWebPortal.Controllers
{
    [EnableCors("https://flo.turkfashioncenter.com", "*", "*")]
    public class StoreReportController : ApiController
    {
  
        public IEnumerable<StoreReport> GetData()
        {
            TURKCENTER_DBEntities turkweb = new TURKCENTER_DBEntities();
            return turkweb.FloStoreReports.Select(x => x).OrderByDescending(x => x.Date).AsEnumerable().Select(x => new StoreReport()
            {
                NetAmount = x.NetAmount,
                Date = x.Date.ToShortDateString(),
                QTY = x.QTY,
                InvoiceCount = x.InvoiceCount,
                VistorCount = x.VistorCount == 0 ? "Not Available" : x.VistorCount.ToString(),
                Day = x.Date.DayOfWeek.ToString(),
                AvargeTransValue= Convert.ToDouble((Convert.ToDouble(x.NetAmount) / Convert.ToDouble(x.InvoiceCount)).ToString("0.##")),
                AvarageTransUnite = Convert.ToDouble((Convert.ToDouble(x.QTY)/ Convert.ToDouble(x.InvoiceCount)).ToString("0.##")),
                VistorConversationRate = x.VistorCount == 0 ? "Not Available".ToString() : (Convert.ToDouble(x.InvoiceCount) / Convert.ToDouble(x.VistorCount)).ToString("0.##")
                
            }).ToArray();
        }
    }
}
