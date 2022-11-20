using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Mapping;
using Application.Services.IService;
using AutoMapper;
using Domain.Common.Dto.User;
using Domain.Common.Enum;
using Domain.Common.Helper;
using Domain.Entities;
using Repository;

namespace Application.Services.Service
{
    public class UserService : IUserService
    {
        IRepositories<User> _repository;
        public IMapper _mapper { get; }

        public UserService(IRepositories<User> repository, IMapper mapper)
        {
            this._repository = repository;
            this._mapper = mapper;
        }

        public async Task<ApiResponse<bool>> AddService(UserDto add, CancellationToken cancellationToken)
        {
            var map = ObjectMapper.Mapper.Map<User>(add);
            await _repository.AddAsync(map, cancellationToken, true);

            return new ApiResponse<bool>(ResponseStatusEnum.Success, true, Message.SuccessfullMessage);
        }

        public async Task<ApiResponse<bool>> EditService(UserDto edit, CancellationToken cancellationToken)
        {
            var map = ObjectMapper.Mapper.Map<User>(edit);
            await _repository.UpdateAsync(map, cancellationToken, true);

            return new ApiResponse<bool>(ResponseStatusEnum.Success, true, Message.SuccessfullMessage);
        }

        public async Task<ApiResponse<bool>> DeleteService(int userId, CancellationToken cancellationToken)
        {
            var user = await _repository.ExistsAsync(x => x.Id == userId);
            if (!user)
            {
                return new ApiResponse<bool>(ResponseStatusEnum.NotFound, false, Message.NotFoundErrorMessage);
            }
            await _repository.DeleteAsync(x => x.Id == userId, cancellationToken, true);
            return new ApiResponse<bool>(ResponseStatusEnum.Success, true, Message.SuccessfullMessage);
        }
    }
}