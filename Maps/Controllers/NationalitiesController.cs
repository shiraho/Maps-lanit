using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using Maps.Models;

namespace Maps.Controllers
{
    public class NationalitiesController : ApiController
    {
        private NationalityContext db = new NationalityContext();

        // GET: api/Nationalities
        public IQueryable<Nationality> GetNationalitys()
        {
            return db.Nationalitys;
        }

        // GET: api/Nationalities/5
        [ResponseType(typeof(Nationality))]
        public IHttpActionResult GetNationality(int id)
        {
            Nationality nationality = db.Nationalitys.Find(id);
            if (nationality == null)
            {
                return NotFound();
            }

            return Ok(nationality);
        }

        // PUT: api/Nationalities/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutNationality(int id, Nationality nationality)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != nationality.Id)
            {
                return BadRequest();
            }

            db.Entry(nationality).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!NationalityExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Nationalities
        [ResponseType(typeof(Nationality))]
        public IHttpActionResult PostNationality(Nationality nationality)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Nationalitys.Add(nationality);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = nationality.Id }, nationality);
        }

        // DELETE: api/Nationalities/5
        [ResponseType(typeof(Nationality))]
        public IHttpActionResult DeleteNationality(int id)
        {
            Nationality nationality = db.Nationalitys.Find(id);
            if (nationality == null)
            {
                return NotFound();
            }

            db.Nationalitys.Remove(nationality);
            db.SaveChanges();

            return Ok(nationality);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool NationalityExists(int id)
        {
            return db.Nationalitys.Count(e => e.Id == id) > 0;
        }
    }
}