<template>
  <div id="distribution-hotel-list" class="container">
    <div class="serach">
      <div class="nation">
        <nation ref="nation"></nation>
      </div>
    </div>
    <div class="distribution-hotel-list">
      <el-table
        v-loading="loading"
        :data="distributionHotels"
        border
        style="width: 100%">
        <el-table-column
          prop="distribution_hotel_name"
          label="酒店名称"
          align="center">
        </el-table-column>
        <el-table-column
          label="操作"
          align="center">
          <template slot-scope="scope">
            <el-button type="text" @click="getMappingHotel(scope.row)">mapping</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog
      title="酒店mapping"
      :visible.sync="hotelMappingVisible"
      width="50%">
      <el-form label-width="120px" size="mini">
        <el-form-item label="代理商酒店名称">
          <el-col :span="15">
            <el-input readonly v-model="hotelMappingData.distribution_hotel_name"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="代理商酒店ID">
          <el-col :span="15">
            <el-input readonly v-model="hotelMappingData.distribution_hotel_id"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="初选酒店ID">
          <el-col :span="8">
            <el-input readonly v-model="hotelMappingData.initial_hotel_id"></el-input>
          </el-col>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
            <el-button size="mini" type="primary" :loading="loading" @click="doHotelMapping">确 定</el-button>
            <el-button size="mini" type="danger" @click="hotelMappingVisible = false">取 消</el-button>
      </span>
    </el-dialog>
    <div class="pagination">
      <el-pagination
        background
        layout="prev, pager, next"
        :page-size="pageSize"
        :current-page.sync="currentPage"
        :total="total"
        @current-change="getDistributionHotels">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import nation from '@/components/common/nation'
import api from '@/config/api'

export default {
  components: {
    nation
  },
  data() {
    return {
      distributionHotels: [],
      currentPage: 1,
      total: 0,
      pageSize: 15,
      loading: false,
      hotelMappingVisible: false,
      hotelMappingData: {
        distribution_hotel_name: '',
        distribution_hotel_id: '',
        initial_hotel_id: '',
      },
    }
  },
  mounted() {
    this.getDistributionHotels()
  },
  watch: {
  },
  methods: {
    async getDistributionHotels() {
      try {
        this.loading = true
        const params = {
          currentPage: this.currentPage
        }
        const res = await api.getDistributionHotels(params)
        if (res.code === 0) {
          this.distributionHotels = res.distributionHotels
          this.total = res.total
          this.pageSize = res.pageSize
        } else {
          this.$message({ type: 'warning', message: res.msg })
        }
        this.loading = false
        window.scrollTo(0, 0)
      } catch (e) {
        this.$message.error(e.message)
      }
    },
    getMappingHotel(row) {
      this.hotelMappingVisible = true
      this.hotelMappingData.distribution_hotel_name = row.distribution_hotel_name
      this.hotelMappingData.distribution_hotel_id   = row.distribution_hotel_id
      this.hotelMappingData.initial_hotel_id = row.initial_hotel_id
    },
    async doHotelMapping() {
      try {
        const params = {
          distributionHotelId: this.hotelMappingData.distribution_hotel_id,
          initialHotelId: this.hotelMappingData.initial_hotel_id
        }
        const res = await api.doHotelMapping(params)
        if (res.code === 0) {
          this.$message({ type: 'success', message: res.msg })
        }
      } catch (e) {
        this.$message.error(e.message)
      }
    }
  }
}
</script>

<style lang="sass" scoped>
</style>
