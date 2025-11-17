# monorepo
> 2022.11.08

## 什么是monorepo?
单体仓库，其中包含多个开发项目project(module、package)。虽然这些project也许是相关联的，但他们逻辑上相互独立，并被不同的团队负责编写、运行。

Monorepo优点：
更好处理服务之间的版本依赖性，一次可以对多个服务进行更改。
  * 透明度: 所有人能看到所有人写的代码。能更好的协作和跨团队贡献。
  * 共享依赖轻而易举，所有依赖仅有一个版本，意味着没有版本冲突（相依性地狱、依赖地狱）
  * 一致性: 所有代码集中在一个地方，执行代码质量标准和统一风格很容易。
  * Atomic Commits: 使大规模重构更容易。开发人员可以在一次commit中更新多个包或项目。
  * CI/CD:
  * build:

Monorepo缺点：
  随着monorepo越来越庞大，版本控制工具、构建系统和CI pipelines方面会面临设计极限。
  * 糟糕的性能: IDE卡顿、生产力受影响，每次提交后的测试阶段变得苦不堪言。
  * 污染主线分支：一个烂的master会影响所有在monorepo工作的人。
  * 学习曲线：项目仓库中有跨域许多紧密糅合的project，那么新开发人员的学习曲线更加陡峭。

## monorepo手册

muti-repo不好的点：
  * 很难在应用程序之间共享代码
  * 在团队里用一个统一的方式构建代码


## 参考
1. https://qwqaq.com/2021/08/what-is-monorepo/#%E4%BB%80%E4%B9%88%E6%98%AF-monorepo
2. https://semaphoreci.com/blog/what-is-monorepo
3. [Monorepo手册](https://turbo.build/repo/docs/handbook)
