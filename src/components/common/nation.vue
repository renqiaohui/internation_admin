<template>
  <div class="nation-component-warp">
    <el-form :inline="true" label-width="72px" size="mini">
      <el-form-item label="地区选择">
        <el-select v-model="level1" placeholder="请选择洲" @change="getNextNations($event, 1)">
          <el-option v-for="continent in continents" :key="continent.id" :label="continent.name" :value="continent.id"></el-option>
        </el-select>
        <el-select  v-model="level2" @change="getNextNations($event, 2)" v-if="nationsLevel.level2.length > 0">
          <el-option v-for="nation in nationsLevel.level2" :key="nation.id" :label="nation.name" :value="nation.id"></el-option>
        </el-select>
        <el-select  v-model="level3" @change="getNextNations($event, 3)" v-if="nationsLevel.level3.length > 0">
           <el-option v-for="nation in nationsLevel.level3" :key="nation.id" :label="nation.name" :value="nation.id"></el-option>
        </el-select>
        <el-select  v-model="level4" @change="getNextNations($event, 4)" v-if="nationsLevel.level4.length > 0">
          <el-option v-for="nation in nationsLevel.level4" :key="nation.id" :label="nation.name" :value="nation.id"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import api from '@/config/api'

export default {
  data() {
    return {
      // nation
      continents: [
        { id: 1, level: 1, name: '亚洲', path: ',1,' },
        { id: 2, level: 1, name: '欧洲', path: ',2,' },
        { id: 3, level: 1, name: '非洲', path: ',3,' },
        { id: 4, level: 1, name: '北美', path: ',4,' },
        { id: 5, level: 1, name: '南美', path: ',5,' },
        { id: 6, level: 1, name: '大洋洲', path: ',6,' }
      ],
      nationsLevel: {
        level2: [],
        level3: [],
        level4: []
      },
      level1: 1,
      level2: '',
      level3: '',
      level4: ''
    }
  },
  mounted() {
    this.getNextNations()
  },
  watch: {
    level1() {
      this.nationsLevel.level2 = []
      this.nationsLevel.level3 = []
      this.nationsLevel.level4 = []
      this.level2 = ''
      this.level3 = ''
      this.level4 = ''
    },
    level2() {
      this.nationsLevel.level3 = []
      this.nationsLevel.level4 = []
      this.level3 = ''
      this.level4 = ''
    },
    level3() {
      this.nationsLevel.level4 = []
      this.level4 = ''
    }
  },
  methods: {
    async getNextNations($event, level = 1) {
      if (level === 4) return true
      try {
        const res = await api.getNextNations({ pid: this[`level${level}`] })
        if (res.code === 0) {
          this.nationsLevel[`level${level + 1}`] = res.nations
        } else {
          this.$message({ type: 'warning', message: res.msg })
        }
      } catch (e) {
        this.$message.error(e.message)
      }
    },
    getPath() {
      let level2Path = ''
      if (this.level2) {
        level2Path = `${this.level2},`
      }
      let level3Path = ''
      if (this.level3) {
        level3Path = `${this.level3},`
      }
      let level4Path = ''
      if (this.level4) {
        level4Path = `${this.level4},`
      }
      return `,${this.level1},${level2Path}${level3Path}${level4Path}`
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
