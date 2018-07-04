using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace Maps.Models
{
    public class NationalityDbInitializer : DropCreateDatabaseAlways<NationalityContext>
    {
        protected override void Seed(NationalityContext db)
        {
            db.Nationalitys.Add(new Nationality { Title = "русские", Peoples = 92.7});
            db.Nationalitys.Add(new Nationality { Title = "украинцы", Peoples = 2.0 });
            db.Nationalitys.Add(new Nationality { Title = "белорусы", Peoples = 1.1 });
            db.Nationalitys.Add(new Nationality { Title = "татары", Peoples = 0.5 });
            db.Nationalitys.Add(new Nationality { Title = "армяне", Peoples = 0.4 });
            db.Nationalitys.Add(new Nationality { Title = "узбеки", Peoples = 0.4 });
            db.Nationalitys.Add(new Nationality { Title = "азербайджанцы", Peoples = 0.4 });
            db.Nationalitys.Add(new Nationality { Title = "финны", Peoples = 0.3 });
            db.Nationalitys.Add(new Nationality { Title = "цыгане", Peoples = 0.2 });
            db.Nationalitys.Add(new Nationality { Title = "таджики", Peoples = 0.2 });
            db.Nationalitys.Add(new Nationality { Title = "молдаване", Peoples = 0.2 });
            db.Nationalitys.Add(new Nationality { Title = "вепсы", Peoples = 0.1 });
            db.Nationalitys.Add(new Nationality { Title = "ижорцы", Peoples = 0.01 });
            db.Nationalitys.Add(new Nationality { Title = "водь", Peoples = 0.002 });



            base.Seed(db);
        }
    }
}