using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace Maps.Models
{
    public class AreaDbInitializer : DropCreateDatabaseAlways<AreaContext>
    {
        protected override void Seed(AreaContext db)
        {
            db.Areas.Add(new Area { Title = "Центральный федеральный округ",  SurfaceArea = 650205, Population = 39311413});
            db.Areas.Add(new Area { Title = "Северо-Западный федеральный округ", SurfaceArea = 1686972, Population = 13952003 });
            db.Areas.Add(new Area { Title = "Южный федеральный округ", SurfaceArea = 447821, Population = 16441852 });
            db.Areas.Add(new Area { Title = "Северо-Кавказский федеральный округ", SurfaceArea = 170439, Population = 9823481 });
            db.Areas.Add(new Area { Title = "Приволжский федеральный округ", SurfaceArea = 1036975, Population = 29542696 });
            db.Areas.Add(new Area { Title = "Уральский федеральный округ", SurfaceArea = 1818497, Population = 12356229 });
            db.Areas.Add(new Area { Title = "Сибирский федеральный округ", SurfaceArea = 5144953, Population = 19287474 });
            db.Areas.Add(new Area { Title = "Дальневосточный федеральный округ", SurfaceArea = 6169329, Population = 6165284 });
            base.Seed(db);
        }
    }
}