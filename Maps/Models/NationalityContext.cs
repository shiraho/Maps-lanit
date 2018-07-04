using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace Maps.Models
{
    public class NationalityContext : DbContext
    {
        public DbSet<Nationality> Nationalitys { get; set; }
    }
}