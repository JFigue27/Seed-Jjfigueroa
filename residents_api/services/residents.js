const { residentsMock } = require('../utils/mocks/residents');

class ResidentsService {
  async getResidents() {
    const residents = await Promise.resolve(residentsMock);
    return residents || [];
  }

  async getResident() {
    const resident = await Promise.resolve(residentsMock[0]);
    return resident || {};
  }

  async createResident() {
    const createdResidentId = await Promise.resolve(residentsMock[0].Id);
    return createdResidentId;
  }

  async updateResident() {
    const updatedResidentId = await Promise.resolve(residentsMock[0].id);
    return updatedResidentId;
  }
  async patchResident() {
    const patchResidentId = await Promise.resolve(residentsMock[0].id);
    return patchResidentId;
  }

  async deleteResident() {
    const deletedResident = await Promise.resolve(residentsMock[0].id);
    return deletedResident;
  }
}

module.exports = ResidentsService;
