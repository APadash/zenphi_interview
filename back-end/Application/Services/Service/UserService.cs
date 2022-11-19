using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Services.IService;
using AutoMapper;
using Domain.Entities;
using Repository;

namespace Application.Services.Service
{
    public class UserService : IUserService
    {
        IRepositories<User> _repositoryUser;
        public IMapper _mapper { get; }

        public UserService(IRepositories<User> repositoryUser, IMapper mapper) {
            this._repositoryUser = repositoryUser;
            this._mapper = mapper;
        }

        
    }
}