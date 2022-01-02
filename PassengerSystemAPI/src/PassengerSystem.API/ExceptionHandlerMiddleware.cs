using PassengerSystem.Domain.Exceptions;
using Serilog;
using System.Net;
using System.Text.Json;

namespace PassengerSystem.API
{
    public class ExceptionHandlerMiddleware
    {
        private readonly RequestDelegate _next;
        public ExceptionHandlerMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task InvokeAsync(HttpContext httpContext)
        {
            try
            {
                await _next(httpContext);
            }
            catch (Exception err)
            {
                Log.Error(err.Message);
                await HandleExceptionAsync(httpContext, err);
            }
        }

        private async Task HandleExceptionAsync(HttpContext httpContext, Exception err)
        {
            httpContext.Response.ContentType = "application/json";
            switch (err)
            {
                case FieldValidationException:
                    httpContext.Response.StatusCode = (int)HttpStatusCode.BadRequest;
                    break;
                case ArgumentNullException:
                    httpContext.Response.StatusCode = (int)HttpStatusCode.BadRequest;
                    break;
                case UserNotFoundException:
                    httpContext.Response.StatusCode = (int)HttpStatusCode.Unauthorized;
                    break;
                default:
                    httpContext.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
                    break;
            }
            var response = JsonSerializer.Serialize(new
            {
                Message = err.Message,
                StatusCode = httpContext.Response.StatusCode,
            });
            await httpContext.Response.WriteAsync(response);
        }
    }
}
