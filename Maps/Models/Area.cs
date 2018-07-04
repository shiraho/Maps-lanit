using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Maps.Models
{
    public class Area
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int SurfaceArea { get; set; }
        public int Population { get; set; }
    }
}