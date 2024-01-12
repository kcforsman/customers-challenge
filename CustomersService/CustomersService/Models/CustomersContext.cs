using Microsoft.EntityFrameworkCore;
using Faker;
using System;

namespace CustomersService.Models;

public class CustomersContext: DbContext
{
    public CustomersContext(DbContextOptions<CustomersContext> options)
        : base(options)
    {
        // As this is test not implementing environment
        // but normally would add a flag to only generate fake data for a development deployment
        Generate100FakeCustomers();
    }

    public DbSet<Customer> Customers { get; set; } = null!;

    private void Generate100FakeCustomers()
    {
        for (int i = 0; i < 100; i++)
        {
            this.Add(GenerateFakeCustomer());
        }
        this.SaveChanges();
    }

    private Customer GenerateFakeCustomer()
    {
        string firstName = Name.First();
        string lastName = Name.Last();
        string email = $"{firstName}.{lastName}@fakeplace.com";
        DateTime dateTime = GenerateRandom2023DateTime();
        Customer customer = new Customer
        {
            FirstName = firstName,
            LastName = lastName,
            Email = email,
            CreatedAt = dateTime,
            UpdatedAt = dateTime,
        };
        return customer;
    }

    private DateTime GenerateRandom2023DateTime()
    {
        var random = new Random();
        int month = random.Next(1, 13);
        int day = random.Next(1, 29);
        return new DateTime(2023, month, day);
    }
}

