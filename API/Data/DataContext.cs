using Microsoft.EntityFrameworkCore;
using API.Entities;
namespace API.Data
{
    // 資料庫資料
    // using Microsoft.EntityFrameworkCore  DbContext
    public class DataContext : DbContext
    {
        public DataContext( DbContextOptions options) : base(options)
        {

        }

        public DbSet<AppUser> Users { get; set; }
    }
}