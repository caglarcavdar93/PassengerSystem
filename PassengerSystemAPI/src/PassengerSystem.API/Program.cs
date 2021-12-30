using PassengerSystem.API;
using PassengerSystem.Application;
using PassengerSystem.Repositories;
using PassengerSystem.Repositories.Seed;
using Serilog;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
Log.Logger = new LoggerConfiguration().WriteTo.Console().CreateLogger();
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddInfrastructure(builder.Configuration);
builder.Services.AddApplication();
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.UseMiddleware<ExceptionHandlerMiddleware>();

var scopedFactory = app.Services.GetService<IServiceScopeFactory>();

using (var scope = scopedFactory.CreateScope())
{
    var service = scope.ServiceProvider.GetService<DataSeeder>();
    await service.SeedDataAsync();
}

app.Run();
